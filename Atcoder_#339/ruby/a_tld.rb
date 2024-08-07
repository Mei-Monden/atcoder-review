s = gets.chomp

s_chars = s.chars
n = s.length

indices = s_chars.each_index.select { |i| s_chars[i] == '.' }

last_index = indices.last

puts s.slice(last_index+1..-1)
