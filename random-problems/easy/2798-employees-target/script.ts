function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  let res = 0;
  for (let i = 0; i < hours.length; i++) {
    let workLoad = hours[i];

    if (workLoad >= target) {
      res++;
    }
  }

  return res;
}
