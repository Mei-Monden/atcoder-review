n, s, m, l = gets.split.map(&:to_i)

min_cost = Float::INFINITY

(0..(n/6 + 1)).each do |i|
  (0..(n/8 + 1)).each do |j|
    (0..(n/12 + 1)).each do |k|
      total_eggs = i * 6 + j * 8 + k * 12
      if total_eggs >= n
        cost = i * s + j * m + k * l
        min_cost = [min_cost, cost].min
      end
    end
  end
end

puts min_cost
