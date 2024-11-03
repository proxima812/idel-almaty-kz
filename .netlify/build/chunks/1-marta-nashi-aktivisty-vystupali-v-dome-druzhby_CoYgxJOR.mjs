import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "🌷1 марта наши активисты выступали в Доме Дружбы",
  "description": "Праздник в честь «Дня Благодарности»",
  "pubDate": "2024-03-01T00:00:00.000Z",
  "heroImage": "../../assets/images/posts/1-marta-nashi-aktivisty-vystupali-v-dome-druzhby/heroImage.jpg",
  "draft": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "Поздравим их с дебютом 👏❤️"
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
const url = "src/content/posts/1-marta-nashi-aktivisty-vystupali-v-dome-druzhby.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/1-marta-nashi-aktivisty-vystupali-v-dome-druzhby.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/1-marta-nashi-aktivisty-vystupali-v-dome-druzhby.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
