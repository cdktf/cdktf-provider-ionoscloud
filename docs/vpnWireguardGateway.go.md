# `vpnWireguardGateway` Submodule <a name="`vpnWireguardGateway` Submodule" id="@cdktf/provider-ionoscloud.vpnWireguardGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnWireguardGateway <a name="VpnWireguardGateway" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway ionoscloud_vpn_wireguard_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.NewVpnWireguardGateway(scope Construct, id *string, config VpnWireguardGatewayConfig) VpnWireguardGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig">VpnWireguardGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig">VpnWireguardGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr">ResetInterfaceIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr">ResetInterfaceIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort">ResetListenPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections"></a>

```go
func PutConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts"></a>

```go
func PutTimeouts(value VpnWireguardGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetInterfaceIpv4Cidr` <a name="ResetInterfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr"></a>

```go
func ResetInterfaceIpv4Cidr()
```

##### `ResetInterfaceIpv6Cidr` <a name="ResetInterfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr"></a>

```go
func ResetInterfaceIpv6Cidr()
```

##### `ResetListenPort` <a name="ResetListenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort"></a>

```go
func ResetListenPort()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.VpnWireguardGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.VpnWireguardGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.VpnWireguardGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.VpnWireguardGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpnWireguardGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpnWireguardGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpnWireguardGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput">ConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput">GatewayIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput">InterfaceIpv4CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput">InterfaceIpv6CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput">ListenPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp">GatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr">InterfaceIpv4Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr">InterfaceIpv6Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort">ListenPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections"></a>

```go
func Connections() VpnWireguardGatewayConnectionsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a>

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts"></a>

```go
func Timeouts() VpnWireguardGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput"></a>

```go
func ConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GatewayIpInput`<sup>Optional</sup> <a name="GatewayIpInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput"></a>

```go
func GatewayIpInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfaceIpv4CidrInput`<sup>Optional</sup> <a name="InterfaceIpv4CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput"></a>

```go
func InterfaceIpv4CidrInput() *string
```

- *Type:* *string

---

##### `InterfaceIpv6CidrInput`<sup>Optional</sup> <a name="InterfaceIpv6CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput"></a>

```go
func InterfaceIpv6CidrInput() *string
```

- *Type:* *string

---

##### `ListenPortInput`<sup>Optional</sup> <a name="ListenPortInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput"></a>

```go
func ListenPortInput() *f64
```

- *Type:* *f64

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp"></a>

```go
func GatewayIp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceIpv4Cidr`<sup>Required</sup> <a name="InterfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr"></a>

```go
func InterfaceIpv4Cidr() *string
```

- *Type:* *string

---

##### `InterfaceIpv6Cidr`<sup>Required</sup> <a name="InterfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr"></a>

```go
func InterfaceIpv6Cidr() *string
```

- *Type:* *string

---

##### `ListenPort`<sup>Required</sup> <a name="ListenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort"></a>

```go
func ListenPort() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnWireguardGatewayConfig <a name="VpnWireguardGatewayConfig" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

&vpnwireguardgateway.VpnWireguardGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Connections: interface{},
	GatewayIp: *string,
	Name: *string,
	PrivateKey: *string,
	Description: *string,
	Id: *string,
	InterfaceIpv4Cidr: *string,
	InterfaceIpv6Cidr: *string,
	ListenPort: *f64,
	Location: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.vpnWireguardGateway.VpnWireguardGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections">Connections</a></code> | <code>interface{}</code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp">GatewayIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | PrivateKey used for WireGuard Server. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr">InterfaceIpv4Cidr</a></code> | <code>*string</code> | The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr">InterfaceIpv6Cidr</a></code> | <code>*string</code> | The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort">ListenPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location">Location</a></code> | <code>*string</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections"></a>

```go
Connections interface{}
```

- *Type:* interface{}

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#connections VpnWireguardGateway#connections}

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp"></a>

```go
GatewayIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

PrivateKey used for WireGuard Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#private_key VpnWireguardGateway#private_key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterfaceIpv4Cidr`<sup>Optional</sup> <a name="InterfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr"></a>

```go
InterfaceIpv4Cidr *string
```

- *Type:* *string

The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv4CIDR or interfaceIPv6CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#interface_ipv4_cidr VpnWireguardGateway#interface_ipv4_cidr}

---

##### `InterfaceIpv6Cidr`<sup>Optional</sup> <a name="InterfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr"></a>

```go
InterfaceIpv6Cidr *string
```

- *Type:* *string

The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface.

**Note**: either interfaceIPv6CIDR or interfaceIPv4CIDR is **required**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#interface_ipv6_cidr VpnWireguardGateway#interface_ipv6_cidr}

---

##### `ListenPort`<sup>Optional</sup> <a name="ListenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort"></a>

```go
ListenPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#location VpnWireguardGateway#location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts"></a>

```go
Timeouts VpnWireguardGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#timeouts VpnWireguardGateway#timeouts}

---

### VpnWireguardGatewayConnections <a name="VpnWireguardGatewayConnections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

&vpnwireguardgateway.VpnWireguardGatewayConnections {
	DatacenterId: *string,
	LanId: *string,
	Ipv4Cidr: *string,
	Ipv6Cidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId">LanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}. |

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}.

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId"></a>

```go
LanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}.

---

##### `Ipv4Cidr`<sup>Optional</sup> <a name="Ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr"></a>

```go
Ipv4Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}.

---

##### `Ipv6Cidr`<sup>Optional</sup> <a name="Ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr"></a>

```go
Ipv6Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}.

---

### VpnWireguardGatewayTimeouts <a name="VpnWireguardGatewayTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

&vpnwireguardgateway.VpnWireguardGatewayTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnWireguardGatewayConnectionsList <a name="VpnWireguardGatewayConnectionsList" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.NewVpnWireguardGatewayConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnWireguardGatewayConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get"></a>

```go
func Get(index *f64) VpnWireguardGatewayConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnWireguardGatewayConnectionsOutputReference <a name="VpnWireguardGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.NewVpnWireguardGatewayConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnWireguardGatewayConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr">ResetIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr">ResetIpv6Cidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Cidr` <a name="ResetIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr"></a>

```go
func ResetIpv4Cidr()
```

##### `ResetIpv6Cidr` <a name="ResetIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr"></a>

```go
func ResetIpv6Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput">Ipv4CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput">Ipv6CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput">LanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `Ipv4CidrInput`<sup>Optional</sup> <a name="Ipv4CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput"></a>

```go
func Ipv4CidrInput() *string
```

- *Type:* *string

---

##### `Ipv6CidrInput`<sup>Optional</sup> <a name="Ipv6CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput"></a>

```go
func Ipv6CidrInput() *string
```

- *Type:* *string

---

##### `LanIdInput`<sup>Optional</sup> <a name="LanIdInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput"></a>

```go
func LanIdInput() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Ipv4Cidr`<sup>Required</sup> <a name="Ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```go
func Ipv4Cidr() *string
```

- *Type:* *string

---

##### `Ipv6Cidr`<sup>Required</sup> <a name="Ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```go
func Ipv6Cidr() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnWireguardGatewayTimeoutsOutputReference <a name="VpnWireguardGatewayTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnwireguardgateway"

vpnwireguardgateway.NewVpnWireguardGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnWireguardGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



