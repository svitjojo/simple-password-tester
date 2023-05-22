export const passwordValidator = (password: string) => {
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasOnlyLetters = /^[a-zA-Z]+$/.test(password);
  const hasOnlyDigits = /^\d+$/.test(password);
  const hasOnlySymbols = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password);
  const isShortPassword = password.length < 8 && password.length > 0;
  const isEasyPassword = (hasOnlyLetters || hasOnlyDigits || hasOnlySymbols);
  const isMediumPassword = ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) && password.length >= 8;
  const isStrongPassword = hasLetters && hasDigits && hasSymbols && password.length >= 8;

  switch (true) {
    case isShortPassword:
      return 'short';
    case isEasyPassword:
      return 'easy';
    case isStrongPassword:
      return 'strong';
    case isMediumPassword:
      return 'medium';
    default:
      return '';
  }
};
