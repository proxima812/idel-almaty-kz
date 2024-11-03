import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Василя",
  "old": "33 года",
  "image": "../../assets/images/posts/vasilya/image.jpeg"
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
      children: "О центре, я знала давно, но в связи с учёбой и работой, долгие годы не удавалось приходить. И после Сабантуя в 2022 летом, я стала активно посещать татарский центр"
    }), "\n", createVNode(_components.h2, {
      id: "что-привлекло-в-центре",
      children: "Что привлекло в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Привлекло, то что в центре всегда весело, постоянный движняк. Изучение языка, культуры, наших традиций, чаепития, все это сблизило нас и сразу повеяло “татарским духом, родным”"
    }), "\n", createVNode(_components.h2, {
      id: "ради-чего-пришли-в-центр",
      children: "Ради чего пришли в центр?"
    }), "\n", createVNode(_components.p, {
      children: "Ради изучение своей культуры. Очень приятно находиться в окружении своих родных татар, а также общение и возможностью найти будущего мужа."
    }), "\n", createVNode(_components.h2, {
      id: "какая-ваша-цель-сейчас-в-центре",
      children: "Какая ваша цель сейчас в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Цель развивать  дальше работу в центре, проводить бесплатно мастер-классы,изучать культуру, показывать её на примере. Главной болью является-это наше здание. Пусть все будет в нашу пользу. Альхамдуллилах 🤲"
    }), "\n", createVNode(_components.h2, {
      id: "кем-вы-являетесь-в-центре",
      children: "Кем вы являетесь в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Я активистка татарского центра, занимаюсь танцами, а также учавствую в других вопросах касательно центра."
    }), "\n", createVNode(_components.h2, {
      id: "что-хотите-пожелать-будущим-новичкам",
      children: "Что хотите пожелать будущим новичкам?"
    }), "\n", createVNode(_components.p, {
      children: "Не стесняться, приходить в центр. Изучать культуру и традиции татарского народа.Приходите, не пожалеете!"
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

const url = "src/content/stories/vasilya.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/vasilya.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/vasilya.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
