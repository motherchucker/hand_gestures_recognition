import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const FistGesture = new GestureDescription("fist");

// thumb:
FistGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
FistGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
FistGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  FistGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  FistGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  FistGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}
