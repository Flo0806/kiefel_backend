//#region
const checkIfNumberHelper = (value) => {
  var regex = /^[1-9]+[0-9]*$/;
  if (value.match(regex)) return true;
  return false;
};
//#endregion

const analyzeInput = (req, res, next) => {
  const number = req.body.number;

  if (checkIfNumberHelper(number)) {
    let result = "";

    if (number % 3 === 0 && number % 5 === 0) {
      result = "Fizz Buzz";
    } else if (number % 3 === 0) {
      result = "Fizz";
    } else if (number % 5 === 0) {
      result = "Buzz";
    }

    res.status(200).json({ result });
  } else {
    res
      .status(500)
      .json({ message: "Die Eingabe ist keine Zahl!", error: true });
  }
};

exports.analyzeInput = analyzeInput;
