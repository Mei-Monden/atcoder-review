s = gets.chomp
t = gets.chomp

index_list = []
s_index = 0

t.length.times do |i|
  if s_index < s.length && s[s_index] == t[i]
    index_list << i + 1
    s_index += 1
  end
end

puts index_list.join(" ")
