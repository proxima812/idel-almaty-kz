class MasonryLayout {
	constructor(container) {
		this.container = container;
		this.originalItems = Array.from(container.children);
		this.defaultCols = 2;
		this.sortByHeight = container.dataset.sortByHeight === "true";

		// Parse breakpointCols from dataset
		const breakpointColsAttr = container.dataset.breakpointCols;
		try {
			const parsed = JSON.parse(breakpointColsAttr);
			this.breakpointCols =
				typeof parsed === "object" ? parsed : { default: parseInt(parsed, 10) };
		} catch {
			this.breakpointCols = { default: this.defaultCols };
		}

		this.columnCount = this.calculateColumnCount();

		this.resizeHandler = throttle(this.handleResize.bind(this), 200);
		window.addEventListener("resize", this.resizeHandler);

		requestAnimationFrame(() => this.createLayout());
	}

	createLayout() {
		this.container.classList.remove("initialized");

		const existingColumns = Array.from(
			this.container.querySelectorAll("[data-masonry-column]"),
		);

		let columns;

		if (existingColumns.length === this.columnCount) {
			columns = existingColumns;
			columns.forEach((col) => (col.innerHTML = ""));
		} else {
			this.container.innerHTML = "";
			columns = Array.from({ length: this.columnCount }, () => {
				const col = document.createElement("div");
				col.className = this.container.dataset.columnClass || "";
				col.style.width = `${100 / this.columnCount}%`;
				col.setAttribute("data-masonry-column", "");
				this.container.appendChild(col);
				return col;
			});
		}

		if (this.sortByHeight) {
			this.originalItems.forEach((item) => {
				const target = columns.reduce((a, b) => (a.offsetHeight <= b.offsetHeight ? a : b));
				target.appendChild(item);
			});
		} else {
			this.originalItems.forEach((item, index) => {
				columns[index % this.columnCount].appendChild(item);
			});
		}

		this.container.classList.add("initialized");
	}

	calculateColumnCount() {
		const width = window.innerWidth;

		if (typeof this.breakpointCols === "object") {
			const breakpoints = Object.keys(this.breakpointCols)
				.filter((k) => k !== "default")
				.map(Number)
				.sort((a, b) => a - b);

			let cols = this.breakpointCols.default;

			for (const bp of breakpoints) {
				if (width <= bp) {
					cols = this.breakpointCols[bp];
					break;
				}
			}

			return cols;
		}

		return this.breakpointCols.default || this.defaultCols;
	}

	handleResize() {
		const nextCount = this.calculateColumnCount();

		if (nextCount !== this.columnCount) {
			this.columnCount = nextCount;
			this.createLayout();
		}
	}
}

/* ---------- init ---------- */

export function initializeMasonry() {
	document.querySelectorAll("[data-masonry-container]").forEach((container) => {
		if (container instanceof HTMLElement && container.children.length > 0) {
			new MasonryLayout(container);
		}
	});
}

/* ---------- utils ---------- */

export function throttle(func, limit) {
	let lastRan = 0;
	let timer;

	return (...args) => {
		const now = Date.now();

		if (now - lastRan >= limit) {
			lastRan = now;
			func(...args);
		} else {
			clearTimeout(timer);
			timer = setTimeout(
				() => {
					lastRan = Date.now();
					func(...args);
				},
				limit - (now - lastRan),
			);
		}
	};
}
