n = gets.to_i
heights = gets.split.map(&:to_i)

first_building_height = heights[0]

position = -1
(1...n).each do |i|
  if heights[i] > first_building_height
    position = i + 1
    break
  end
end

puts position
