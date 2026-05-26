import type { InstantRules } from "@instantdb/react-native";

const rules = {
  $users: {
    allow: {
      view: "auth.id == data.id",
      create: "true",
    },
  },
} satisfies InstantRules;

export default rules;
