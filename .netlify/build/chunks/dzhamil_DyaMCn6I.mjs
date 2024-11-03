import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Джамиль",
  "old": "28 лет",
  "image": "../../assets/images/posts/dzhamil/image.png"
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
      children: "Центр нашел меня сам. Случайно познакомился с Камарией-ханум и она пригласила меня в центр, для того что бы принять участие в жизнедеятельности молодежного крыла."
    }), "\n", createVNode(_components.h2, {
      id: "что-привлекло-в-центре",
      children: "Что привлекло в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Привлекла наша татарская культура, изучение языка, близкая по духу молодежь, которая стала мне второй семьей. А самое главное - возможность развития молодежного крыла."
    }), "\n", createVNode(_components.h2, {
      id: "ради-чего-пришли-в-центр",
      children: "Ради чего пришли в центр?"
    }), "\n", createVNode(_components.p, {
      children: "Пришел рад учпучмаков и чак чака."
    }), "\n", createVNode(_components.h2, {
      id: "какая-ваша-цель-сейчас-в-центре",
      children: "Какая ваша цель сейчас в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Никакая"
    }), "\n", createVNode(_components.h2, {
      id: "кем-вы-являетесь-в-центре",
      children: "Кем вы являетесь в центре?"
    }), "\n", createVNode(_components.p, {
      children: "Никем"
    }), "\n", createVNode(_components.h2, {
      id: "что-хотите-пожелать-будущим-новичкам",
      children: "Что хотите пожелать будущим новичкам?"
    }), "\n", createVNode(_components.p, {
      children: "⁠Берегите и развивайте нашу культуру. Ведите за собой наш народ, помогайте друг другу и держитесь вместе. Ведь нас осталось так мало, кто по настоящему чтит наши традиции устои и с гордостью называет себя татарином/татаркой."
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

const url = "src/content/stories/dzhamil.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/dzhamil.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/stories/dzhamil.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
