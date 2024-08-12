function main(input) {
  const lines = input.trim().split('\n');
  const s_input = lines[0].trim();
  const t_input = lines[1].trim();

  const s1 = s_input[0];
  const s2 = s_input[1];
  const t1 = t_input[0];
  const t2 = t_input[1];

  const array = ["A","B","C","D","E"];

  const s1_index = array.indexOf(s1);
  const s2_index = array.indexOf(s2);
  const t1_index = array.indexOf(t1);
  const t2_index = array.indexOf(t2);

  const s_distance = Math.min(
    Math.abs(s1_index - s2_index),
    5 - Math.abs(s1_index - s2_index)
  );
  const t_distance = Math.min(
    Math.abs(t1_index - t2_index),
    5 - Math.abs(t1_index - t2_index)
  );

  if (s_distance == t_distance) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));