R,G,B = gets.split(" ").map(&:to_i)
C = gets.chomp

X = nil

if C == "Red"
  X = [G, B].min
elsif C == "Green"
  X = [R, B].min
elsif C == "Blue"
  X = [R, G].min
end

puts X