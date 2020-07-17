package tourism9.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import tourism9.backend.model.Log;
import tourism9.backend.service.LogService;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/log")
@RestController
public class LogController {

    private final LogService logService;

    @Autowired
    public LogController(LogService logService) {
        this.logService = logService;
    }

    @PostMapping
    public void addUser(@Valid @NonNull @RequestBody Log log) {
        logService.addLog(log);
    }

    @GetMapping
    public List<Log> getAllLogs() {
        return logService.getAllLogs();
    }

    @GetMapping(path = "{id}")
    public Log getLogByID(@PathVariable("id") UUID id) {
        return logService.getLogByID(id)
                .orElse(null);
    }

    @DeleteMapping("{id}")
    public void deleteLogByID(@PathVariable("id") UUID id) {
        logService.deleteLog(id);
    }

    @PutMapping("{id}")
    public void updateLog(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Log log) {
        logService.updateLog(id, log);
    }
}
