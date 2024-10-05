# `apigatewayRoute` Submodule <a name="`apigatewayRoute` Submodule" id="@cdktf/provider-ionoscloud.apigatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRoute <a name="ApigatewayRoute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route ionoscloud_apigateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_id: str,
  methods: typing.List[str],
  name: str,
  paths: typing.List[str],
  upstreams: typing.Union[IResolvable, typing.List[ApigatewayRouteUpstreams]],
  timeouts: ApigatewayRouteTimeouts = None,
  type: str = None,
  websocket: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | The ID of the API Gateway that the route belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.methods">methods</a></code> | <code>typing.List[str]</code> | The HTTP methods that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the API Gateway Route. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.paths">paths</a></code> | <code>typing.List[str]</code> | The paths that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.upstreams">upstreams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]</code> | upstreams block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.type">type</a></code> | <code>str</code> | This field specifies the protocol used by the ingress to route traffic to the backend service. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.websocket">websocket</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | To enable websocket support. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.gatewayId"></a>

- *Type:* str

The ID of the API Gateway that the route belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#gateway_id ApigatewayRoute#gateway_id}

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.methods"></a>

- *Type:* typing.List[str]

The HTTP methods that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#methods ApigatewayRoute#methods}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.name"></a>

- *Type:* str

The name of the API Gateway Route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#name ApigatewayRoute#name}

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.paths"></a>

- *Type:* typing.List[str]

The paths that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#paths ApigatewayRoute#paths}

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.upstreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#upstreams ApigatewayRoute#upstreams}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#timeouts ApigatewayRoute#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.type"></a>

- *Type:* str

This field specifies the protocol used by the ingress to route traffic to the backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#type ApigatewayRoute#type}

---

##### `websocket`<sup>Optional</sup> <a name="websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.websocket"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

To enable websocket support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#websocket ApigatewayRoute#websocket}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams">put_upstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetWebsocket">reset_websocket</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#create ApigatewayRoute#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#default ApigatewayRoute#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#delete ApigatewayRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#update ApigatewayRoute#update}.

---

##### `put_upstreams` <a name="put_upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams"></a>

```python
def put_upstreams(
  value: typing.Union[IResolvable, typing.List[ApigatewayRouteUpstreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]

---

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_websocket` <a name="reset_websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetWebsocket"></a>

```python
def reset_websocket() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigatewayRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRoute.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigatewayRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigatewayRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference">ApigatewayRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreams">upstreams</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList">ApigatewayRouteUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreamsInput">upstreams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocketInput">websocket_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocket">websocket</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeouts"></a>

```python
timeouts: ApigatewayRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference">ApigatewayRouteTimeoutsOutputReference</a>

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreams"></a>

```python
upstreams: ApigatewayRouteUpstreamsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList">ApigatewayRouteUpstreamsList</a>

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigatewayRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `upstreams_input`<sup>Optional</sup> <a name="upstreams_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreamsInput"></a>

```python
upstreams_input: typing.Union[IResolvable, typing.List[ApigatewayRouteUpstreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]

---

##### `websocket_input`<sup>Optional</sup> <a name="websocket_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocketInput"></a>

```python
websocket_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `websocket`<sup>Required</sup> <a name="websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocket"></a>

```python
websocket: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRouteConfig <a name="ApigatewayRouteConfig" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_id: str,
  methods: typing.List[str],
  name: str,
  paths: typing.List[str],
  upstreams: typing.Union[IResolvable, typing.List[ApigatewayRouteUpstreams]],
  timeouts: ApigatewayRouteTimeouts = None,
  type: str = None,
  websocket: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | The ID of the API Gateway that the route belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.methods">methods</a></code> | <code>typing.List[str]</code> | The HTTP methods that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.name">name</a></code> | <code>str</code> | The name of the API Gateway Route. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.paths">paths</a></code> | <code>typing.List[str]</code> | The paths that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.upstreams">upstreams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]</code> | upstreams block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.type">type</a></code> | <code>str</code> | This field specifies the protocol used by the ingress to route traffic to the backend service. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.websocket">websocket</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | To enable websocket support. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

The ID of the API Gateway that the route belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#gateway_id ApigatewayRoute#gateway_id}

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

The HTTP methods that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#methods ApigatewayRoute#methods}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the API Gateway Route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#name ApigatewayRoute#name}

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

The paths that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#paths ApigatewayRoute#paths}

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.upstreams"></a>

```python
upstreams: typing.Union[IResolvable, typing.List[ApigatewayRouteUpstreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#upstreams ApigatewayRoute#upstreams}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.timeouts"></a>

```python
timeouts: ApigatewayRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#timeouts ApigatewayRoute#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.type"></a>

```python
type: str
```

- *Type:* str

This field specifies the protocol used by the ingress to route traffic to the backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#type ApigatewayRoute#type}

---

##### `websocket`<sup>Optional</sup> <a name="websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.websocket"></a>

```python
websocket: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

To enable websocket support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#websocket ApigatewayRoute#websocket}

---

### ApigatewayRouteTimeouts <a name="ApigatewayRouteTimeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRouteTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#create ApigatewayRoute#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#default ApigatewayRoute#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#delete ApigatewayRoute#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#update ApigatewayRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#create ApigatewayRoute#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#default ApigatewayRoute#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#delete ApigatewayRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#update ApigatewayRoute#update}.

---

### ApigatewayRouteUpstreams <a name="ApigatewayRouteUpstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRouteUpstreams(
  host: str,
  loadbalancer: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.host">host</a></code> | <code>str</code> | The host of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | The load balancer algorithm. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.scheme">scheme</a></code> | <code>str</code> | The target URL of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Weight with which to split traffic to the upstream. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.host"></a>

```python
host: str
```

- *Type:* str

The host of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#host ApigatewayRoute#host}

---

##### `loadbalancer`<sup>Optional</sup> <a name="loadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

The load balancer algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#loadbalancer ApigatewayRoute#loadbalancer}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#port ApigatewayRoute#port}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

The target URL of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#scheme ApigatewayRoute#scheme}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Weight with which to split traffic to the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/apigateway_route#weight ApigatewayRoute#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRouteTimeoutsOutputReference <a name="ApigatewayRouteTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigatewayRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>]

---


### ApigatewayRouteUpstreamsList <a name="ApigatewayRouteUpstreamsList" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRouteUpstreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayRouteUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigatewayRouteUpstreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]]

---


### ApigatewayRouteUpstreamsOutputReference <a name="ApigatewayRouteUpstreamsOutputReference" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import apigateway_route

apigatewayRoute.ApigatewayRouteUpstreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetLoadbalancer">reset_loadbalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_loadbalancer` <a name="reset_loadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetLoadbalancer"></a>

```python
def reset_loadbalancer() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancerInput">loadbalancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancer">loadbalancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `loadbalancer_input`<sup>Optional</sup> <a name="loadbalancer_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancerInput"></a>

```python
loadbalancer_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancer"></a>

```python
loadbalancer: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigatewayRouteUpstreams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>]

---



