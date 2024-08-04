s = gets.chomp
char_s = s.chars
n = s.length

n.times do |i|
  if i < n - 1 && char_s[i] == char_s[i + 1]
    next
  elsif i == 0 && char_s[i] != char_s[i + 2]
    puts 1
    break
  elsif i == n - 1 || char_s[i] != char_s[i - 1]
    puts i + 1
    break
  end
end
