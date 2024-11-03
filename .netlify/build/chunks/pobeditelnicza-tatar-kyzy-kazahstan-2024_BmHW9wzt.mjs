import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const __0_______assets_images_posts_pobeditelnicza_tatar_kyzy_kazahstan_2024_vas13_jpeg__ = new Proxy({"src":"/_astro/vas13.BTP4iGDz.jpeg","width":820,"height":1089,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/assets/images/posts/pobeditelnicza-tatar-kyzy-kazahstan-2024/vas13.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Победительница «Татар Кызы Казахстан 2024»",
  "description": "Татар Кызы Казахстан 2024",
  "pubDate": "2024-07-31T00:00:00.000Z",
  "heroImage": "../../assets/images/posts/pobeditelnicza-tatar-kyzy-kazahstan-2024/heroImage.jpeg",
  "draft": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    p: "p",
    strong: "strong",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "",
        src: __0_______assets_images_posts_pobeditelnicza_tatar_kyzy_kazahstan_2024_vas13_jpeg__
      })
    }), "\n", createVNode(_components.p, {
      children: ["Победительницей «Татар Кызы Казахстан 2024» стала активист татаро-башкирского культурного центра ", createVNode(_components.strong, {
        children: "«Идел»"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Насретдинова Василя"
      })
    }), "\n", createVNode(_components.p, {
      children: "Василя будет представлять всех татарочек Казахстана на международном конкурсе «Татар Кызы» в Казани."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Уңышлар һәм җиңүләр телибез!"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/pobeditelnicza-tatar-kyzy-kazahstan-2024.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/pobeditelnicza-tatar-kyzy-kazahstan-2024.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/pobeditelnicza-tatar-kyzy-kazahstan-2024.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
