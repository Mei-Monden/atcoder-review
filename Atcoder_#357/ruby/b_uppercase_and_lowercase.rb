s = gets.chomp
n = s.length

upcase_count = 0
downcase_count = 0

n.times do |i|
  if s[i] == s[i].upcase
    upcase_count += 1
  else
    downcase_count += 1
  end
end

if upcase_count > downcase_count
  s = s.upcase
else
  s = s.downcase
end

puts s
