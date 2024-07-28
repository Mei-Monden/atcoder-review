S = gets.chomp

first_char = S[0]
second_char = S[1]
third_char = S[2]

if first_char == "R"
  is_rice_left = true
elsif second_char == "R" && third_char == "M"
  is_rice_left = true
else
  is_rice_left = false
end

result = is_rice_left ? "Yes" : "No"

puts result