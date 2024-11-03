import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';

function makeHandler(_config) {
  var _config$clientId, _config$clientSecret, _config$secret;
  const handler = makeGenericAPIRouteHandler({
    ..._config,
    clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : tryOrUndefined(() => {
      return "Iv23lii3EZFCbS0cUcYT";
    }),
    clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : tryOrUndefined(() => {
      return "db95ee44d5d55db5777b51b8a66a019d1ff6fc1f";
    }),
    secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : tryOrUndefined(() => {
      return "1067efd8815da43c37a716268231d1ab3b76bd9943a5511c232d1919a225893b65c0a0121fa63f99";
    })
  }, {
    slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
  });
  return async function keystaticAPIRoute(context) {
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  // storage: { kind: "local" },
  storage: {
    kind: "github",
    repo: "proxima812/idel-almaty-kz"
  },
  collections: {
    posts: collection({
      label: "Посты",
      slugField: "title",
      path: "src/content/posts/*",
      entryLayout: "content",
      columns: ["title", "pubDate", "draft"],
      format: {
        contentField: "content"
      },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        description: fields.text({
          label: "Описание",
          description: "от 20 до 150 символов"
        }),
        pubDate: fields.date({
          label: "Время",
          description: "Время публикации"
        }),
        heroImage: fields.image({
          label: "Фото поста",
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/"
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Set this post as draft to prevent it from being published"
        }),
        content: fields.mdx({
          label: "Контент",
          description: "",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "../../assets/images/posts/"
            }
          }
        })
      }
    }),
    stories: collection({
      label: "Личные истории",
      slugField: "title",
      path: "src/content/stories/*",
      entryLayout: "content",
      columns: ["title", "old"],
      format: {
        contentField: "content"
      },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        // description: fields.text({
        // 	label: "Описание",
        // 	description: "от 20 до 150 символов",
        // }),
        old: fields.text({
          label: "Возраст",
          description: "18 лет"
        }),
        image: fields.image({
          label: "Фото человека",
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/"
        }),
        content: fields.mdx({
          label: "Контент",
          description: "",
          options: {
            image: {
              directory: "src/assets/images/stories",
              publicPath: "../../assets/images/stories/"
            }
          }
        })
      }
    }),
    pages: collection({
      label: "Страницы",
      slugField: "title",
      path: "src/content/pages/*",
      entryLayout: "content",
      format: {
        contentField: "content"
      },
      schema: {
        title: fields.slug({ name: { label: "Заголовок страницы" } }),
        description: fields.text({
          label: "Описание страницы",
          description: "до 145 символов"
        }),
        ogImage: fields.image({
          label: "ogImage (изображение страницы 1200x630)",
          directory: "src/assets/images/pages",
          publicPath: "../../assets/images/pages/"
        }),
        index: fields.checkbox({
          label: "index norobots",
          description: "Set this post as draft to prevent it from being published"
        }),
        content: fields.document({
          label: "Контент страницы",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/pages",
            publicPath: "../../assets/images/pages/"
          }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

export { ALL, all, prerender };
