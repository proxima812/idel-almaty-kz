import { k as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_DgE4IFIn.mjs';
import { $ as $$Image } from './pages/generic_AS2Xlyh_.mjs';
import 'clsx';

const frontmatter = {
  "title": "ТАТАР КЫЗЫ - 2024",
  "description": "Василя участница конкурса ТАТАР КЫЗЫ - 2024, татарыкызы ",
  "pubDate": "2024-07-30T00:00:00.000Z",
  "heroImage": "../../assets/images/posts/tatar-kyzy-2024/heroImage.jpeg",
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
      children: [createVNode(_components.strong, {
        children: "Участница"
      }), " Республиканского конкурса ", createVNode(_components.strong, {
        children: "“ТАТАР КЫЗЫ - 2024”"
      }), createVNode(_components.br, {}), "\nНасретдинова Василя Вячеславовна, 19 лет"]
    }), "\n", createVNode(_components.p, {
      children: ["г. Алматы", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "https://www.instagram.com/idel_almaty_tatarskyi_centre/",
        children: "@idel_almaty_tatarskyi_centre"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\nЭссе о себе:", createVNode(_components.br, {}), "\n“Я Насретдинова Василя Вячеславовна. Мне 19 лет. Родом из солнечного города Шымкент. Окончив школу, поступила в педагогический колледж в город Алматы по специальности «Учитель начального образования». На данный момент обучаюсь на 4-м курсе.", createVNode(_components.br, {}), "\nДанную специальность я выбрала по воле своей души. Мне всегда нравилось общаться с детьми, наблюдать за их развитием. Поступив на учителя начальных классов, я ни разу не пожалела. С каждой практикой я все больше понимаю, что выбрала правильный путь. Параллельно с обучением в колледже я занимаюсь вокалом и танцами. Вокал и танцы - часть меня. Эта частичка во мне с самого детства.", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\nРаскрыть мой творческий потенциал помогает татаро-башкирский центр «Идел», в вокальном и танцевальном ансамблях которого я являюсь участником.", createVNode(_components.br, {}), "\nВыступая вместе с ансамблями, мы мотивируем молодое поколение на изучение татарской культуры, обычаев и традиций. Центр - наш второй дом, помогающий перенять опыт старших и не забывать о своих истоках", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\nНаименование направляющей организации Татаро—башкирский общественно —культурный центр «Идел» г. Алматы”", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "https://www.instagram.com/explore/tags/%D1%82%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%8B%D0%B7%D1%8B%D0%BA%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/",
        children: "#татаркызыКазахстан"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "https://www.instagram.com/explore/tags/%D1%82%D0%B0%D1%82%D0%B0%D1%80%D1%8B%D0%BA%D1%8B%D0%B7%D1%8B/",
        children: "#татарыкызы"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "https://www.instagram.com/explore/tags/%D1%82%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%8B%D0%B7%D1%8B2024/",
        children: "#татаркызы2024"
      })]
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

const url = "src/content/posts/tatar-kyzy-2024.mdx";
const file = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/tatar-kyzy-2024.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/Рабочие/idel-almaty.kz/src/content/posts/tatar-kyzy-2024.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
