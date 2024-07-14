xa, ya = gets.split.map(&:to_i)
xb, yb = gets.split.map(&:to_i)
xc, yc = gets.split.map(&:to_i)

def distance(x1, y1, x2, y2)
  ((x2 - x1)**2 + (y2 - y1)**2)
end

ab = distance(xa, ya, xb, yb)
bc = distance(xb, yb, xc, yc)
ac = distance(xa, ya, xc, yc)

sorted_distances = [ab, bc, ac].sort

if sorted_distances[2] == sorted_distances[0] + sorted_distances[1]
  puts 'Yes'
else
  puts 'No'
end
