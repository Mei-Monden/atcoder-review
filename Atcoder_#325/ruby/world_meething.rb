n = gets.to_i
locations = Array.new(n) { gets.split.map(&:to_i) }

max_employees = 0

(0...24).each do |time|
  current_count = 0
  
  locations.each do |employees, offset|
    local_time = (offset + time) % 24

    if (9..17).include?(local_time)
      current_count += employees
    end
  end

  max_employees = [max_employees, current_count].max
end

puts max_employees
