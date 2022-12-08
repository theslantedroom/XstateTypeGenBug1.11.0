// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "trjh78";
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    trjh78: never;
  };
  matchesStates:
    | "deviceCheck"
    | "error"
    | "getUserMedia"
    | "gumError"
    | "inCall"
    | "inCall.awaiting"
    | "inCall.awaiting.running"
    | "inCall.localRecording"
    | "inCall.localRecording.false"
    | "inCall.localRecording.true"
    | "leavingCall"
    | {
        inCall?:
          | "awaiting"
          | "localRecording"
          | { awaiting?: "running"; localRecording?: "false" | "true" };
      };
  tags: never;
}
