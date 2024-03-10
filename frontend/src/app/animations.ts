/* eslint-disable prettier/prettier */
import {
  trigger,
  animate,
  transition,
  state,
  style,
  query,
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition("* => *", [
    query(":enter, :leave", [style({ position: "absolute", width: "100%" })], {
      optional: true,
    }),
    query(":enter", [style({ opacity: 0 })], { optional: true }),
    query(
      ":leave",
      [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ":enter",
      [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
