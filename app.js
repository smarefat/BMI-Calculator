const weight = prompt("Enter your weight in kg");
const height = prompt("Enter your height in meter");

if (weight && height) {
  const BMI = Number(weight) / Number(height) ** 2;
  console.log(BMI);

  if (BMI < 18.5) {
    alert("under weight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("normal");
  } else if (BMI >= 25 && BMI <= 29.9) {
    alert("over weight");
  } else if (BMI >= 30 && BMI <= 34.9) {
    alert("Obesity (classI)");
  } else if (BMI >= 35 && BMI <= 39.9) {
    alert("Obesity (classII)");
  } else {
    alert("danger zone");
  }
} else {
  alert("please enter weight & height properly!");
}
