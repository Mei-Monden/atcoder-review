s,t = gets.split(" ").map(&:to_s)

result = s == "AtCoder" && t == "Land"

puts result ? "Yes" : "No"
