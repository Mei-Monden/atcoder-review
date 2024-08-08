s = gets.chomp
frequency = Hash.new(0)

s.each_char do |char|
  frequency[char] += 1
end

result_char = frequency.max_by { |char, count| [count, -char.ord] }[0]

puts result_char
