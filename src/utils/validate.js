export const validateIdentity = ({
  name,
  civilcodeFirst,
  civilcodeLast,
  mobileFirst,
  mobileMiddle,
  mobileLast,
}) => {
  const errors = {};
  if (name.length < 2 || name.length > 17) {
    errors.name = true;
  }

  if (civilcodeFirst.length !== 6) {
    errors.civilcodeFirst = true;
  }

  if (civilcodeLast.length !== 7) {
    errors.civilcodeLast = true;
  }

  if (mobileFirst.length !== 3) {
    errors.mobileFirst = true;
  }

  if (mobileMiddle.length < 3 || mobileMiddle.length > 4) {
    errors.mobileMiddle = true;
  }

  if (mobileLast.length !== 4) {
    errors.mobileLast = true;
  }

  return errors;
};
