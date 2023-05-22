import {Rule} from "sanity";

const href = {
  name: 'href',
  title: 'HREF',
  type: 'url',
  validation: (rule: Rule) => rule.uri({
    allowRelative: true,
  }),
}
export {href};
