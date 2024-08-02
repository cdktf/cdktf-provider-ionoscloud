# `apigatewayRoute` Submodule <a name="`apigatewayRoute` Submodule" id="@cdktf/provider-ionoscloud.apigatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRoute <a name="ApigatewayRoute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route ionoscloud_apigateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApigatewayRoute(Construct Scope, string Id, ApigatewayRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig">ApigatewayRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig">ApigatewayRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams">PutUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetWebsocket">ResetWebsocket</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigatewayRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

---

##### `PutUpstreams` <a name="PutUpstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams"></a>

```csharp
private void PutUpstreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams.parameter.value"></a>

- *Type:* object

---

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetWebsocket` <a name="ResetWebsocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetWebsocket"></a>

```csharp
private void ResetWebsocket()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigatewayRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApigatewayRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApigatewayRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApigatewayRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApigatewayRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigatewayRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigatewayRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference">ApigatewayRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList">ApigatewayRouteUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methodsInput">MethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreamsInput">UpstreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocketInput">WebsocketInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocket">Websocket</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeouts"></a>

```csharp
public ApigatewayRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference">ApigatewayRouteTimeoutsOutputReference</a>

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreams"></a>

```csharp
public ApigatewayRouteUpstreamsList Upstreams { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList">ApigatewayRouteUpstreamsList</a>

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methodsInput"></a>

```csharp
public string[] MethodsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UpstreamsInput`<sup>Optional</sup> <a name="UpstreamsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreamsInput"></a>

```csharp
public object UpstreamsInput { get; }
```

- *Type:* object

---

##### `WebsocketInput`<sup>Optional</sup> <a name="WebsocketInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocketInput"></a>

```csharp
public object WebsocketInput { get; }
```

- *Type:* object

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Websocket`<sup>Required</sup> <a name="Websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocket"></a>

```csharp
public object Websocket { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRouteConfig <a name="ApigatewayRouteConfig" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApigatewayRouteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GatewayId,
    string[] Methods,
    string Name,
    string[] Paths,
    object Upstreams,
    ApigatewayRouteTimeouts Timeouts = null,
    string Type = null,
    object Websocket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | The ID of the API Gateway that the route belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.methods">Methods</a></code> | <code>string[]</code> | The HTTP methods that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.name">Name</a></code> | <code>string</code> | The name of the API Gateway Route. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.paths">Paths</a></code> | <code>string[]</code> | The paths that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.upstreams">Upstreams</a></code> | <code>object</code> | upstreams block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.type">Type</a></code> | <code>string</code> | This field specifies the protocol used by the ingress to route traffic to the backend service. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.websocket">Websocket</a></code> | <code>object</code> | To enable websocket support. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

The ID of the API Gateway that the route belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#gateway_id ApigatewayRoute#gateway_id}

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.methods"></a>

```csharp
public string[] Methods { get; set; }
```

- *Type:* string[]

The HTTP methods that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#methods ApigatewayRoute#methods}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the API Gateway Route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#name ApigatewayRoute#name}

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

The paths that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#paths ApigatewayRoute#paths}

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.upstreams"></a>

```csharp
public object Upstreams { get; set; }
```

- *Type:* object

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#upstreams ApigatewayRoute#upstreams}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.timeouts"></a>

```csharp
public ApigatewayRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#timeouts ApigatewayRoute#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

This field specifies the protocol used by the ingress to route traffic to the backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#type ApigatewayRoute#type}

---

##### `Websocket`<sup>Optional</sup> <a name="Websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.websocket"></a>

```csharp
public object Websocket { get; set; }
```

- *Type:* object

To enable websocket support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#websocket ApigatewayRoute#websocket}

---

### ApigatewayRouteTimeouts <a name="ApigatewayRouteTimeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApigatewayRouteTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#create ApigatewayRoute#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#default ApigatewayRoute#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#delete ApigatewayRoute#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#update ApigatewayRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#create ApigatewayRoute#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#default ApigatewayRoute#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#delete ApigatewayRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#update ApigatewayRoute#update}.

---

### ApigatewayRouteUpstreams <a name="ApigatewayRouteUpstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApigatewayRouteUpstreams {
    string Host,
    string Loadbalancer = null,
    double Port = null,
    string Scheme = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.host">Host</a></code> | <code>string</code> | The host of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.loadbalancer">Loadbalancer</a></code> | <code>string</code> | The load balancer algorithm. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.port">Port</a></code> | <code>double</code> | The port of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.scheme">Scheme</a></code> | <code>string</code> | The target URL of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.weight">Weight</a></code> | <code>double</code> | Weight with which to split traffic to the upstream. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#host ApigatewayRoute#host}

---

##### `Loadbalancer`<sup>Optional</sup> <a name="Loadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.loadbalancer"></a>

```csharp
public string Loadbalancer { get; set; }
```

- *Type:* string

The load balancer algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#loadbalancer ApigatewayRoute#loadbalancer}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#port ApigatewayRoute#port}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

The target URL of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#scheme ApigatewayRoute#scheme}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Weight with which to split traffic to the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/apigateway_route#weight ApigatewayRoute#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRouteTimeoutsOutputReference <a name="ApigatewayRouteTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApigatewayRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigatewayRouteUpstreamsList <a name="ApigatewayRouteUpstreamsList" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApigatewayRouteUpstreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get"></a>

```csharp
private ApigatewayRouteUpstreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigatewayRouteUpstreamsOutputReference <a name="ApigatewayRouteUpstreamsOutputReference" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApigatewayRouteUpstreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetLoadbalancer">ResetLoadbalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoadbalancer` <a name="ResetLoadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetLoadbalancer"></a>

```csharp
private void ResetLoadbalancer()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancerInput">LoadbalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancer">Loadbalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `LoadbalancerInput`<sup>Optional</sup> <a name="LoadbalancerInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancerInput"></a>

```csharp
public string LoadbalancerInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancer"></a>

```csharp
public string Loadbalancer { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



