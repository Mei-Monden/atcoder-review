numbers = []
loop do
  num = gets.to_i
  numbers << num
  break if num == 0
end

numbers.reverse.each do |n|
  puts n
end
