n,x,y,z = gets.split.map(&:to_i)

if (x <= z && z <= y) || (y <= z && z <= x)
  puts "Yes"
else
  puts "No"
end
