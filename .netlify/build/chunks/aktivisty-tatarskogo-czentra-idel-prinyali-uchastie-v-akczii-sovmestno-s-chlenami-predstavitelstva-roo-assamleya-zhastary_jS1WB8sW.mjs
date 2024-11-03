import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Активисты татарского центра «Идел» приняли участие в акции совместно с членами представительства РОО «Ассамлея жастары»",
  "description": "г. Алматы провели акцию «Остановка Наурыз» в рамках восьмого дня «Ынтымақ» декады Наурызнама.",
  "pubDate": "2024-03-22T00:00:00.000Z",
  "heroImage": "../../assets/images/posts/aktivisty-tatarskogo-czentra-idel-prinyali-uchastie-v-akczii-sovmestno-s-chlenami-predstavitelstva-roo-assamleya-zhastary/heroImage.jpg",
  "draft": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["На общественной автобусной остановке перед одной из улиц города, активисты центра развернули праздничный стол, раздавая бауырсаки и разливая праздничный Наурыз коже для водителей и пассажиров, встречая каждый автобус, а также проезжающих на автомобилях горожан и прохожих алматинцев.", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\nНе смотря на сильный дождь, дарили всем теплое и хорошее настроение.☀️"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.instagram.com/p/C4zsQJQi8Hk/",
        children: createVNode(_components.strong, {
          children: "Посмотреть видеоролик"
        })
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

const url = "src/content/posts/aktivisty-tatarskogo-czentra-idel-prinyali-uchastie-v-akczii-sovmestno-s-chlenami-predstavitelstva-roo-assamleya-zhastary.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/aktivisty-tatarskogo-czentra-idel-prinyali-uchastie-v-akczii-sovmestno-s-chlenami-predstavitelstva-roo-assamleya-zhastary.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/aktivisty-tatarskogo-czentra-idel-prinyali-uchastie-v-akczii-sovmestno-s-chlenami-predstavitelstva-roo-assamleya-zhastary.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
