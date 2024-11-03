import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Амина",
  "old": "21 год",
  "image": "../../assets/images/posts/Amina/image.jpeg"
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
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "как-нашли-центр",
      children: createVNode(_components.strong, {
        children: "Как нашли центр?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Через инстаграм нашла центр, написала председателю и пришла. Активно следила за чатом и страницей инстаграм и через год вернулась со своими идеями в центр) с полной готовностью привнести что-то свое."
    }), "\n", createVNode(_components.h2, {
      id: "что-привлекло-в-центре",
      children: createVNode(_components.strong, {
        children: "Что привлекло в центре?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Национальный порыв , но в  дальнейшем важным фактором стало окружение которое начало у нас образовываться. Молодые интересные ребята, горячо любящие свою культуру."
    }), "\n", createVNode(_components.h2, {
      id: "ради-чего-пришли-в-центр",
      children: createVNode(_components.strong, {
        children: "Ради чего пришли в центр?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Ради культурного время провождения."
    }), "\n", createVNode(_components.h2, {
      id: "какая-ваша-цель-сейчас-в-центре",
      children: createVNode(_components.strong, {
        children: "Какая ваша цель сейчас в центре?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Приложить все усилия для сохранения нашего здания. Как можно больше заинтересовать молодежь в изучении родного языка. Привить в каждую семью татарские традиции."
    }), "\n", createVNode(_components.h2, {
      id: "кем-вы-являетесь-в-центре",
      children: createVNode(_components.strong, {
        children: "Кем вы являетесь в центре?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Председатель молодежного крыла Татаро-Башкирского центра «Идел»"
    }), "\n", createVNode(_components.h2, {
      id: "что-хотите-пожелать-будущим-новичкам",
      children: createVNode(_components.strong, {
        children: "Что хотите пожелать будущим новичкам?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Не стесняться и приходить в наш центр, искать в себе силы чтобы изучить татарский язык."
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

const url = "src/content/stories/Amina.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/Amina.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/Amina.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
