n = gets.to_i
points = []

n.times do
  x, y = gets.split.map(&:to_i)
  points << [x, y]
end

def euclidean_distance(point1, point2)
  Math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2)
end

(0...n).each do |i|
  max_distance = -1
  max_point_index = -1

  (0...n).each do |j|
    next if i == j

    distance = euclidean_distance(points[i], points[j])
    if distance > max_distance || (distance == max_distance && j < max_point_index)
      max_distance = distance
      max_point_index = j
    end
  end

  puts max_point_index + 1
end
