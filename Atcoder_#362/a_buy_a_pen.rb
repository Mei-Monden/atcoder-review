R,G,B = gets.split(" ").map(&:to_i)
C = gets.chomp

X = nil

case C
when "Red"
  X = [G, B].min
when "Green"
  X = [R, B].min
when "Blue"
  X = [R, G].min
end

puts X
