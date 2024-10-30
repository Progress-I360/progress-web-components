import fs from "fs";

const source = fs.readFileSync(
    "INFRA UI Foundation and Tokens - plugin_variables2css.json",
    "utf8"
  ),
  sourceTokens = JSON.parse(source),
  buildKey = (name) => name.split(/[ //-]/).join("-"),
  buildTokens = (sources, tokens) => {
    sources.forEach((s) => {
      const key = buildKey(s.name);

      tokens.push(`--${key}: ${s.value};`);
    });
  };

let tokens = [],
  dark = [],
  light = [];

sourceTokens.forEach((token) => {
  switch (token.name) {
    case "Design tokens":
      console.log(`found ${token.name}...`);

      token.values.forEach((value) => {
        switch (value.mode.name) {
          case "Dark theme":
            console.log(`found ${value.mode.name}...`);
            buildTokens(value.color, dark);

            break;
          case "Light theme":
            console.log(`found ${value.mode.name}...`);
            buildTokens(value.color, light);

            break;
          default:
            console.warn(`unexpected theme ${value.mode.name}...`);
            break;
        }
      });

      break;
    case "Primitives - Sizes":
      console.log(`found ${token.name}...`);
      buildTokens(token.values[0].number, tokens);

      break;
    case "Primitives – Strings":
      console.log(`found ${token.name}...`);
      buildTokens(token.values[0].string, tokens);

      break;
    default:
      console.log(`skipping ${token.name}...`);
      break;
  }
});

const css = `:root, :host {
        ${tokens.join("\n")}
        &.pwc-dark {
            color-scheme: dark;
            ${dark.join("\n")}
        }
        &.pwc-light {
            color-scheme: light;
            ${light.join("\n")}
        }   
    }`;

fs.writeFileSync("src/static/css/pwc.css", css);
