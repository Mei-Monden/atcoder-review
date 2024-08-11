n = gets.to_i

(0..n).each do |x|
  (0..n).each do |y|
    (0..n).each do |z|
      if x + y + z <= n
        puts "#{x} #{y} #{z}"
      end
    end
  end
end
