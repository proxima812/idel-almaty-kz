export type NavItem = {
	label: string;
	href: string;
	target?: "_blank" | "_self";
	icon?: string;
	style?: string;
	icon_style?: string;
	/** Коллекция, количество записей которой показывается кружком у ссылки. */
	countFrom?: "posts" | "stories";
};

export const navigation: NavItem[] = [
	{
		label: "О нас",
		href: "/",
		icon_style: "",
		// target: "_blank",
		icon: "mdi:notification-clear-all",
		style: "",
	},
	{
		label: "События",
		href: "/posts",
		icon_style: "text-green-500",
		// target: "_blank",
		icon: "mdi:bell-ring",
		style: "",
		countFrom: "posts",
	},
	{
		label: "Истории активистов",
		href: "/stories",
		icon_style: "",
		style: "",
		icon: "mdi:square-rounded-badge",
		countFrom: "stories",
	},
	{
		label: "Татарский | Ансамбли",
		href: "/events",
		icon_style: "",
		style: "",
		icon: "mdi:account-school",
	},
];
