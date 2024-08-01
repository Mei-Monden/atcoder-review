s = gets.chomp

char = s.chars
first = nil
second = nil

s.length.times do |i|
  if char[i] == "|" && first.nil?
    first = i
  elsif char[i] == "|"
    second = i
    break
  end
end

s.slice!(first..second)

puts s
