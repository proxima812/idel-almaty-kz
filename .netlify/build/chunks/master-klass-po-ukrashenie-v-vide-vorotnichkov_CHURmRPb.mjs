import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const __0_______assets_images_posts_master_klass_po_ukrashenie_v_vide_vorotnichkov_123_jpeg__ = new Proxy({"src":"/_astro/123.D8efYB0H.jpeg","width":1080,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/assets/images/posts/master-klass-po-ukrashenie-v-vide-vorotnichkov/123.jpeg";
							}
							
							return target[name];
						}
					});

const __1_______assets_images_posts_master_klass_po_ukrashenie_v_vide_vorotnichkov_321_jpeg__ = new Proxy({"src":"/_astro/321.B822PAbK.jpeg","width":1200,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/assets/images/posts/master-klass-po-ukrashenie-v-vide-vorotnichkov/321.jpeg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Мастер класс по \"украшение в виде воротничков\"",
  "description": "4 февраля было мероприятие",
  "pubDate": "2024-02-04",
  "heroImage": "../../assets/images/posts/master-klass-po-ukrashenie-v-vide-vorotnichkov/heroImage.jpeg",
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
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "",
        src: __0_______assets_images_posts_master_klass_po_ukrashenie_v_vide_vorotnichkov_123_jpeg__
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "",
        src: __1_______assets_images_posts_master_klass_po_ukrashenie_v_vide_vorotnichkov_321_jpeg__
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

const url = "src/content/posts/master-klass-po-ukrashenie-v-vide-vorotnichkov.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/master-klass-po-ukrashenie-v-vide-vorotnichkov.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/master-klass-po-ukrashenie-v-vide-vorotnichkov.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
