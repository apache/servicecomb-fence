package org.apache.servicecomb.fence.edge.dependencies;

import java.util.Map;
import java.util.concurrent.CompletableFuture;

import org.apache.servicecomb.fence.token.OpenIDToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping(path = "/v1/token")
public interface AsyncTokenService {
  @PostMapping(path = "/")
  CompletableFuture<OpenIDToken> grantToken(@RequestBody Map<String, String> parameters);

  @PostMapping(path = "/query")
  CompletableFuture<OpenIDToken> queryToken(@RequestParam("access_token") String accessToken);
}
