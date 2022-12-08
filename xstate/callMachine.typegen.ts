// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: "resetContext";
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    resetContext: "RESET_CONTEXT";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "deviceCheck"
    | "error"
    | "getUserMedia"
    | "gumError"
    | "inCall"
    | "inCall.awaitingAnswerTimer"
    | "inCall.awaitingAnswerTimer.running"
    | "inCall.localRecording"
    | "inCall.localRecording.false"
    | "inCall.localRecording.true"
    | "leavingCall"
    | {
        inCall?:
          | "awaitingAnswerTimer"
          | "localRecording"
          | {
              awaitingAnswerTimer?: "running";
              localRecording?: "false" | "true";
            };
      };
  tags: never;
}
