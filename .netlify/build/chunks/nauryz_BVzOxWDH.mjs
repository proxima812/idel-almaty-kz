import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "🌷НАУРЫЗ🌷",
  "description": "21 марта – Ынтымақ күні.",
  "pubDate": "2024-03-21T00:00:00.000Z",
  "heroImage": "../../assets/images/posts/nauryz/heroImage.jpg",
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
      children: ["🌎Идея этого дня заключается в том, чтобы люди в целом повышали уважение друг к другу и пропагандировали мир и единство.", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\n🇰🇿В этот день Татаро-башкирский общественно-культурный центр “Идел” провёл запоминающееся мероприятие в рамках Наурызнамы, которое было направлено на укрепление солидарности и дружбы между народами, населяющими Казахстан."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.br, {}), "\n😊Была проведена беседа о значении всей Наурызнамы и направлении каждого дня декады.", createVNode(_components.br, {}), "\n🎤На этом празднике прозвучали поздравления на казахском, татарском, башкирском, русском и даже на английском языках."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.br, {}), "\n🪗Участники празднования слушали игру на баяне и домбрах. Присутствующие с восторгом встретили обряд “Шашу”.", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\n🖋️Татаро— башкирский общественно—культурный центр «Идел» г. Алматы."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.instagram.com/p/C4w2wmOCQfm/",
        children: createVNode(_components.strong, {
          children: "Смотреть видеоролик"
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

const url = "src/content/posts/nauryz.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/nauryz.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/nauryz.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
