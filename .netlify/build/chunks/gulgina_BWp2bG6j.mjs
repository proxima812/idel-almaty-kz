import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Гульгина",
  "old": "28 лет",
  "image": "../../assets/images/posts/gulgina/image.jpeg"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "как-нашли-центр",
    "text": "Как нашли центр?"
  }, {
    "depth": 2,
    "slug": "что-привлекло-в-центре",
    "text": "Что привлекло в центре?"
  }, {
    "depth": 2,
    "slug": "ради-чего-пришли-в-центр",
    "text": "Ради чего пришли в центр?"
  }, {
    "depth": 2,
    "slug": "какая-ваша-цель-сейчас-в-центре",
    "text": "Какая ваша цель сейчас в центре?"
  }, {
    "depth": 2,
    "slug": "кем-вы-являетесь-в-центре",
    "text": "Кем вы являетесь в центре?"
  }, {
    "depth": 2,
    "slug": "что-хотите-пожелать-будущим-новичкам",
    "text": "Что хотите пожелать будущим новичкам?"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "как-нашли-центр",
      children: "Как нашли центр?"
    }), "\n", createVNode(_components.p, {
      children: "В 2019 году на Сабантуе познакомилась с активистами центра, после чего они рассказали о центре и пригласили на уроки татарского языка."
    }), "\n", createVNode(_components.h2, {
      id: "что-привлекло-в-центре",
      children: "Что привлекло в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Меня привлекло большое количество молодежи и их сплоченность, изучение языка и культуры нашего народа."
    }), "\n", createVNode(_components.h2, {
      id: "ради-чего-пришли-в-центр",
      children: "Ради чего пришли в центр?"
    }), "\n", createVNode(_components.p, {
      children: "Пришла в центр подтянуть свой татарский язык, обучаться народному танцу что бы в дальнейшем выступать на Сабантуе, и самое главное найти себе друзей) пришла найти друзей но в итоге приобрела себе новую Татарскую СЕМЬЮ."
    }), "\n", createVNode(_components.h2, {
      id: "какая-ваша-цель-сейчас-в-центре",
      children: "Какая ваша цель сейчас в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Цель развивать нашу культуру и язык, привлечь как можно больше молодежи в наш центр."
    }), "\n", createVNode(_components.h2, {
      id: "кем-вы-являетесь-в-центре",
      children: "Кем вы являетесь в центре?"
    }), "\n", createVNode(_components.p, {
      children: "В центре я являюсь активисткой, мобилографом и видеографом)"
    }), "\n", createVNode(_components.h2, {
      id: "что-хотите-пожелать-будущим-новичкам",
      children: "Что хотите пожелать будущим новичкам?"
    }), "\n", createVNode(_components.p, {
      children: "Развивайте культуру, учите татарский язык, не забывайте свои корни."
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

const url = "src/content/stories/gulgina.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/gulgina.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/gulgina.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
