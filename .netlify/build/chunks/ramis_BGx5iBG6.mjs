import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Рамис",
  "old": "26 лет",
  "image": "../../assets/images/posts/ramis/image.jpeg"
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
      children: "Первый раз попал в центр благодаря родственнику."
    }), "\n", createVNode(_components.h2, {
      id: "что-привлекло-в-центре",
      children: "Что привлекло в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Привлекла культура своего народа, родная татарская речь."
    }), "\n", createVNode(_components.h2, {
      id: "ради-чего-пришли-в-центр",
      children: "Ради чего пришли в центр?"
    }), "\n", createVNode(_components.p, {
      children: "В 2016 году пришел первый раз в центр с целью преподавания в качестве тренера. Открыл секцию дзюдо для детей всех возрастов на бесплатной основе для участников центра  и взрослых. Через какое-то время в 2020 хотел начать изучать татарский язык и пришел в молодежное крыло ,откуда и началась связь с центром 😅"
    }), "\n", createVNode(_components.h2, {
      id: "какая-ваша-цель-сейчас-в-центре",
      children: "Какая ваша цель сейчас в центре?"
    }), "\n", createVNode(_components.p, {
      children: "На данный момент целью моей является укрепление и изучение культуры, развитие своей культуру на высшем уровне. Укрепление  связей всей нации, сплоченность, вырастить в будущем достойное поколение."
    }), "\n", createVNode(_components.h2, {
      id: "кем-вы-являетесь-в-центре",
      children: "Кем вы являетесь в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Я являюсь заместителем и исполняющим обязанности председателем молодежного крыла татаро башкирского этнокультурного центра Идел."
    }), "\n", createVNode(_components.h2, {
      id: "что-хотите-пожелать-будущим-новичкам",
      children: "Что хотите пожелать будущим новичкам?"
    }), "\n", createVNode(_components.p, {
      children: "Хочу пожелать всем кто желает придти - сделать это скорее) здесь вы найдете огромную татарскую семью, новых друзей и возможность создать семью. Вы найдете поддержку и очень много полезного для себя."
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

const url = "src/content/stories/ramis.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/ramis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/ramis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
