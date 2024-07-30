W, B = gets.split.map(&:to_i)

pattern = "wbwbwwbwbwbwwbwbwwbwbwbw"
pattern_length = pattern.length

num = [W / 7, B / 5].min
W -= 7 * num
B -= 5 * num

num_w = 0
num_b = 0
i = 0
j = 0
ans = "No"
pattern_length.times do
  if pattern[i] == "w"
    num_w += 1
  else
    num_b += 1
  end
  if W == num_w && B == num_b
    ans = "Yes"
  elsif num_w > W
      if pattern[j] == "w"
        num_w -= 1
      else
        num_b -= 1
      end
    j += 1
  elsif num_b > B
      if pattern[j] == "w"
        num_w -= 1
      else
        num_b -= 1
      end
    j += 1
  end
  i += 1
end

puts ans
