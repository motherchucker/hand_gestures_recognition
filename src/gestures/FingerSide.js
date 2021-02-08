import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const FingerSideGesture = new GestureDescription("finger_side");

// Thumb

FingerSideGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
FingerSideGesture.addDirection(Finger.Thumb, FingerCurl.DiagonalUpRight, 0.8);
FingerSideGesture.addDirection(Finger.Thumb, FingerCurl.DiagonalUpLeft, 0.8);

// Index

FingerSideGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FingerSideGesture.addDirection(
  Finger.Index,
  FingerDirection.HorizontalRight,
  0.75
);
FingerSideGesture.addDirection(
  Finger.Index,
  FingerDirection.HorizontalLeft,
  0.75
);

// Others
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  FingerSideGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  FingerSideGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  FingerSideGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}
