export function formatPhoneNumber(phone) {
  let phone_ = phone.replace(/\D/g, '');
  phone_ = phone_.toString();
  const length = phone_.length;

  var _phone = '';
  if (length == 12 && phone_.substring(0, 3) == '254') {
    _phone = phone_;
  } else if (length == 9 && phone_.substring(0, 1) == 7) {
    _phone = '254' + phone_;
  } else if (length == 10 && phone_.substring(0, 1) == 0) {
    _phone = '254' + phone_.substring(1, 10);
  } else {
    _phone = 'Invalid Phone Number ' + phone;
  }

  return _phone;
}
