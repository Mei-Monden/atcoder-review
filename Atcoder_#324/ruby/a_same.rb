n = gets.to_i
a = gets.split(" ").map(&:to_i)

if a.all? { |e| e == a[0] }
  puts "Yes"
else
  puts "No"
end
